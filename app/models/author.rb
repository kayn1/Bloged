class Author < ApplicationRecord
  devise :database_authenticatable, #:registerable,
         :recoverable, :rememberable, :trackable, :validatable
  devise :database_authenticatable, 
         :recoverable, :rememberable, :trackable, :validatable

  has_many :posts       

 	
end
