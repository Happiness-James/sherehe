class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :location, :Date, :showtime, :Available_tickets, :price, :category, :poster
end
