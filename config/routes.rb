Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'
  namespace :api, defaults: { format: JSON } do
    resource :session, only: [:create, :destroy]
    resources :users, except: [:new, :edit]
    resources :photos, except: [:new, :edit]
  end
end
