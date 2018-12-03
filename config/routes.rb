Rails.application.routes.draw do
# devise_for :users
    root 'messages#index'   #ルートパスの指定
 	resources :messages
    resources :groups
    resources :users, only: [:show] 

end
