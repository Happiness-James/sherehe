class Event < ApplicationRecord
    belongs_to :user
    validates :title, presence: true, uniqueness: true
    validates :category, inclusion:  ['live','upcoming','online']

    def date
        created_at.strftime('%B %e, %Y')
      end
end
