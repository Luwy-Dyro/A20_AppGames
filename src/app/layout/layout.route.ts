import { Routes } from "@angular/router";
import { IndexComponent } from "../Pages/Home/index/index.component";
import { Homepage7Component } from "../Pages/Home/homepage/homepage.component";
import { GameServer1Component } from "../Pages/GameServer/game-server-1/game-server-1.component";
import { GameServer2Component } from "../Pages/GameServer/game-server-2/game-server-2.component";
import { PricingTableFourComponent } from "../Pages/Pricing/pricing-table-four/pricing-table-four.component";
import { PricingTableThreeComponent } from "../Pages/Pricing/pricing-table-three/pricing-table-three.component";
import { PricingTableTwoComponent } from "../Pages/Pricing/pricing-table-two/pricing-table-two.component";
import { PricingTableOneComponent } from "../Pages/Pricing/pricing-table-one/pricing-table-one.component";
import { LocationsComponent } from "../Pages/locations/locations.component";
import { KnowledgebaseComponent } from "../Pages/support/knowledgebase/knowledgebase.component";
import { FaqComponent } from "../Pages/support/faq/faq.component";
import { ContactComponent } from "../Pages/support/contact/contact.component";
import { AboutComponent } from "../Pages/company/about/about.component";
import { AffliateComponent } from "../Pages/company/affliate/affliate.component";
import { NewsComponent } from "../Pages/company/news/news.component";
import { LoginComponent } from "../Pages/Auth/login/login.component";
import { RegisterComponent } from "../Pages/Auth/register/register.component";
import { NewsSingleComponent } from "../Pages/company/news-single/news-single.component";
export const MP_ROUTES: Routes = [

    { path: '', component: Homepage7Component },
  
    { path: 'homepage-7', component: Homepage7Component },

    { path: 'game-server-1', component: GameServer1Component },
    { path: 'game-server-2', component: GameServer2Component },

    { path: 'pricing-table-one', component: PricingTableOneComponent },
    { path: 'pricing-table-one/:slug', component: PricingTableOneComponent },
    { path: 'pricing-table-two', component: PricingTableTwoComponent },
    { path: 'pricing-table-three', component: PricingTableThreeComponent },
    { path: 'pricing-table-four', component: PricingTableFourComponent },

    { path: 'locations', component: LocationsComponent },
    { path: 'knowledgebase', component: KnowledgebaseComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'affliate', component: AffliateComponent },
    { path: 'news', component: NewsComponent },
    { path: 'news-single', component: NewsSingleComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
]