import { CommonModule } from '@angular/common';
import { Component, computed, ElementRef, HostListener, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthloginService } from '../../Service/authlogin.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  authLogin = inject(AuthloginService);
  isAuthenticated = toSignal(this.authLogin.isAuthenticated$)
  isLoading = toSignal(this.authLogin.isLoading$)

  headerClass: string = 'transparent';
  isMenuOpen: boolean = false;
  isMobile: boolean = false;
  activeMenuItems: Set<string> = new Set();


  constructor(
    private elementRef: ElementRef,
    private router: Router // Add Router injection
  ) {
    this.checkScreenSize();
  }

  ngOnInit(): void {
    this.updateHeaderClass();

    // Listen to route changes to close mobile menu
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.closeAllDropdowns();
      if (this.isMobile) {
        this.isMenuOpen = false;
        this.updateHeaderClass();
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.updateHeaderClass();
  }

  @HostListener('window:resize', [])
  onWindowResize(): void {
    this.checkScreenSize();
    this.updateHeaderClass();
  }

  // Add click outside listener to close dropdowns
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const headerElement = this.elementRef.nativeElement.querySelector('#mainmenu');

    if (headerElement && !headerElement.contains(target)) {
      this.closeAllDropdowns();
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.updateHeaderClass();
  }

  /**
   * Navigate to route and close dropdowns
   */
  navigateToRoute(route: string, event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.closeAllDropdowns();
    if (this.isMobile) {
      this.isMenuOpen = false;
      this.updateHeaderClass();
    }

    this.router.navigate([route]).catch(error => {
      console.error('Navigation error:', error);
    });
  }

  /**
   * Toggle dropdown menu for a specific menu item
   */
  toggleDropdown(menuId: string, event: Event): void {
    // Only prevent default for items that have dropdowns
    if (this.hasDropdown(menuId)) {
      event.preventDefault();
      event.stopPropagation();
    }

    const menuElement = (event.target as HTMLElement).closest('li');
    const dropdownElement = menuElement?.querySelector('ul');

    if (!menuElement || !dropdownElement) return;

    const isCurrentlyActive = this.activeMenuItems.has(menuId);

    if (isCurrentlyActive) {
      this.closeDropdown(menuId, menuElement, dropdownElement);
    } else {
      this.closeAllDropdowns();
      this.openDropdown(menuId, menuElement, dropdownElement);
    }
  }

  /**
   * Check if menu item has dropdown
   */
  private hasDropdown(menuId: string): boolean {
    const menusWithDropdowns = ['home', 'gameservers', 'games', 'support', 'company', 'morepages'];
    return menusWithDropdowns.includes(menuId);
  }

  /**
   * Open a dropdown menu with animation
   */
  private openDropdown(menuId: string, menuElement: Element, dropdownElement: HTMLElement): void {
    this.activeMenuItems.add(menuId);

    const linkElement = menuElement.querySelector('a');
    if (linkElement) {
      linkElement.classList.add('active');
    }

    dropdownElement.style.display = 'block';
    dropdownElement.style.height = '0px';
    dropdownElement.style.overflow = 'hidden';

    const tempHeight = dropdownElement.style.height;
    dropdownElement.style.height = 'auto';
    const targetHeight = dropdownElement.offsetHeight;
    dropdownElement.style.height = tempHeight;

    this.animateHeight(dropdownElement, 0, targetHeight, 300, () => {
      dropdownElement.style.height = 'auto';
      dropdownElement.style.overflow = 'visible';
    });
  }

  /**
   * Close a dropdown menu with animation
   */
  private closeDropdown(menuId: string, menuElement: Element, dropdownElement: HTMLElement): void {
    this.activeMenuItems.delete(menuId);

    const linkElement = menuElement.querySelector('a');
    if (linkElement) {
      linkElement.classList.remove('active');
    }

    const currentHeight = dropdownElement.offsetHeight;
    dropdownElement.style.overflow = 'hidden';

    this.animateHeight(dropdownElement, currentHeight, 0, 300, () => {
      dropdownElement.style.display = 'none';
      dropdownElement.style.height = 'auto';
      dropdownElement.style.overflow = 'visible';
    });
  }

  /**
   * Close all open dropdowns
   */
  private closeAllDropdowns(): void {
    const activeMenuIds = Array.from(this.activeMenuItems);
    activeMenuIds.forEach(menuId => {
      const menuElement = this.elementRef.nativeElement.querySelector(`[data-menu-id="${menuId}"]`);
      if (menuElement) {
        const dropdownElement = menuElement.querySelector('ul');
        if (dropdownElement) {
          this.closeDropdown(menuId, menuElement, dropdownElement);
        }
      }
    });
  }

  /**
   * Animate height change with easing
   */
  private animateHeight(element: HTMLElement, startHeight: number, endHeight: number, duration: number, callback?: () => void): void {
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuint = 1 - Math.pow(1 - progress, 5);
      const currentHeight = startHeight + (endHeight - startHeight) * easeOutQuint;
      element.style.height = `${currentHeight}px`;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else if (callback) {
        callback();
      }
    };

    requestAnimationFrame(animate);
  }

  /**
   * Check if a menu item is active
   */
  isMenuItemActive(menuId: string): boolean {
    return this.activeMenuItems.has(menuId);
  }

  /**
   * Get dropdown height for a menu item
   */
  getDropdownHeight(menuId: string): string {
    return this.activeMenuItems.has(menuId) ? 'auto' : '0px';
  }

  private checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 768;
  }

  private updateHeaderClass(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    let classes = ['transparent'];

    if (this.isMobile) {
      classes.push('header-mobile');
    } else {
      if (scrollPosition > 50) {
        classes.push('clone', 'smaller');
      }
    }

    if (this.isMenuOpen) {
      classes.push('menu-open');
    }

    this.headerClass = classes.join(' ');
  }

  get headerHeight(): string {
    return this.isMenuOpen ? '858px' : 'auto';
  }



}
