# == Schema Information
#
# Table name: posts
#
#  id               :integer          not null, primary key
#  title            :string
#  body             :text
#  description      :text
#  slug             :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  banner_image_url :string
#  author_id        :integer
#  published        :boolean          default("f")
#  published_at     :datetime
#

class Post < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: :slugged

  belongs_to :author

  scope :most_recent, -> { order(id: :desc) }
  scope :published, -> { where(published: true) }

  def should_generate_new_friendly_id?
  	title_changed?
  end

  def published_date
    if published_at.present?
  	"#{published_at.strftime('%-d - %B - %Y')}"
  else
    "Not published yet"
    end
  end

 end