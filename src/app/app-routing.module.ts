import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'onboarding',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./pages/onboarding/onboarding.module').then(m => m.OnboardingPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'userdetail',
    loadChildren: () => import('./userdetail/userdetail.module').then(m => m.UserDetailPageModule)
  },
  {
    path: 'requestdetail',
    loadChildren: () => import('./pages/requestdetail/requestdetail.module').then(m => m.RequestDetailPageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./wishlist/wishlist.module').then( m => m.WishlistPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./pages/address/address.module').then(m => m.AddressPageModule)
  },
  {
    path: 'summary',
    loadChildren: () => import('./summary/summary.module').then( m => m.SummaryPageModule)
  },
  {
    path: 'successmodal',
    loadChildren: () => import('./successmodal/successmodal.module').then( m => m.SuccessmodalPageModule)
  },
  {
    path: 'myrequests',
    loadChildren: () => import('./pages/myrequests/mrequests.module').then(m => m.MyRequestsPageModule)
  },
  {
    path: 'myoffers',
    loadChildren: () => import('./myoffers/myoffers.module').then(m => m.MyOffersPageModule)
  },
  {
    path: 'orderdetails',
    loadChildren: () => import('./orderdetails/orderdetails.module').then( m => m.OrderdetailsPageModule)
  },
  {
    path: 'addreview',
    loadChildren: () => import('./addreview/addreview.module').then( m => m.AddreviewPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'email-activated',
    loadChildren: () => import('./email-activate/email-activate.module').then( m => m.EmailActivatePageModule)
  },
  {
    path: 'create-request',
    loadChildren: () => import('./pages/create-request/create-request.module').then( m => m.CreateRequestPageModule)
  },
  {
    path: 'matching',
    loadChildren: () => import('./pages/matching/matching.module').then( m => m.MatchingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
