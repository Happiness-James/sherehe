class User < ApplicationRecord
   has_many :events
   validates :username, presence:true, uniqueness: true
   validates :password, length: { in: 6..20 }
   validates :email, uniqueness: true
 
end
