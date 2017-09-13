class Author < ApplicationRecord
  devise :database_authenticatable, #:registerable,
         :recoverable, :rememberable, :trackable, :validatable
  devise :database_authenticatable, 
         :recoverable, :rememberable, :trackable, :validatable

  has_many :posts       


  def change_password(pass)
  	update(
  		password: pass[:new_password], 
  		password_confirmation: pass[:new_password_confirmation]) 
  end
end
