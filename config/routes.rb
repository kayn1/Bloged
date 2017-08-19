Rails.application.routes.draw do

  devise_for :authors
  root to: 'blog/posts#index'

  namespace :authors do 
    get '/account' => 'accounts#edit', as: :account 
    put '/info' => 'accounts#update_author', as: :update_author
    put '/update_password' => 'accounts#update_password', as: :update_password
    resources :posts do
      get 'publish' => 'posts#publish', on: :member
      get 'unpublish' => 'posts#unpublish', on: :member
    end
  end

  scope module: 'blog' do
  	get 'about' => 'pages#about', as: :about
  	get 'contact' => 'pages#contact', as: :contact
    get 'posts' => 'posts#index', as: :posts
    get 'posts/:id' => 'posts#show', as: :post

    
    
  end
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
