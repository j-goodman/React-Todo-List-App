class Todo < ActiveRecord::Base
  validates :title, presence: true
  validates :body, presence: true
  validates :done, inclusion: { in: [true, false] }
end
