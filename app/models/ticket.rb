class Ticket < ActiveRecord::Base
  belongs_to :user
  belongs_to :event

  validates :commit, length: { maximum: 30 }, allow_blank: true
end
