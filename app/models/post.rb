class Post < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: :slugged
  acts_as_taggable

  belongs_to :author

  scope :most_recent, -> { order(published_at: :desc) }
  scope :published, -> { where(published: true )}

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

  def published
    if published?
      true
    else
        false
    end
  end

 end