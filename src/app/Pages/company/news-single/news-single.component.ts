import AOS from 'aos';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { jarallax } from 'jarallax';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-news-single',
  imports: [CommonModule, FormsModule],
  templateUrl: './news-single.component.html',
  styleUrl: './news-single.component.css'
})
export class NewsSingleComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  ngOnInit(): void {
    const elements = document.querySelectorAll('.jarallax');
    const options = {
      speed: 0.5,
    };
    jarallax(elements, options);
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        mirror: false,
      });
    }
  }

  comments = [
    {
      id: 1,
      name: 'Merrill Rayos',
      date: '15 January 2020',
      avatar: 'assets/images/people/1.jpg',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      replies: [
        {
          id: 2,
          name: 'Jackqueline Sprang',
          date: '15 January 2020',
          avatar: 'assets/images/people/2.jpg',
          text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        }
      ]
    },
    {
      id: 3,
      name: 'Sanford Crowley',
      date: '15 January 2020',
      avatar: 'assets/images/people/3.jpg',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      replies: [
        {
          id: 4,
          name: 'Lyndon Pocekay',
          date: '15 January 2020',
          avatar: 'assets/images/people/4.jpg',
          text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        }
      ]
    },
    {
      id: 5,
      name: 'Aleen Crigger',
      date: '15 January 2020',
      avatar: 'assets/images/people/5.jpg',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      replies: []
    }
  ];

  recentPosts = [
    { date: '10 Jun', title: '6 Make Mobile Website Faster', link: '#' },
    { date: '22 Jun', title: 'Experts Web Design Tips', link: '#' },
    { date: '20 Jun', title: 'Importance Of Web Design', link: '#' },
    { date: '12 Jun', title: 'Avoid These Erros In UI Design', link: '#' }
  ];

  tags = [
    { name: 'Art', link: '#link' },
    { name: 'Application', link: '#link' },
    { name: 'Design', link: '#link' },
    { name: 'Entertainment', link: '#link' },
    { name: 'Internet', link: '#link' },
    { name: 'Marketing', link: '#link' },
    { name: 'Multipurpose', link: '#link' },
    { name: 'Music', link: '#link' },
    { name: 'Print', link: '#link' },
    { name: 'Programming', link: '#link' },
    { name: 'Responsive', link: '#link' },
    { name: 'Website', link: '#link' }
  ];

  aboutText = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni';

  newComment = {
    name: '',
    email: '',
    message: ''
  };

  showSuccessMessage = false;
  showErrorMessage = false;

  onReply(event: Event, commentId: number): void {
    event.preventDefault();
    console.log('Reply to comment:', commentId);
    // Implement reply functionality here
  }

  onSubmitComment(): void {
    console.log('Submitting comment:', this.newComment);

    // Simulate form submission
    if (this.newComment.email && this.newComment.message) {
      this.showSuccessMessage = true;
      this.showErrorMessage = false;

      // Reset form after successful submission
      setTimeout(() => {
        this.newComment = { name: '', email: '', message: '' };
        this.showSuccessMessage = false;
      }, 3000);
    } else {
      this.showErrorMessage = true;
      this.showSuccessMessage = false;
    }
  }

  onShare(platform: string): void {
    console.log('Sharing on:', platform);
    // Implement social sharing functionality here
  }
}
