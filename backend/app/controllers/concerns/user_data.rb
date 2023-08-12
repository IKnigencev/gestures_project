# frozen_string_literal: true

##
#
module UserData
  extend ActiveSupport::Concern
  STEPS_LESSON_PROGRESS = "steps_lesson_progress%<user_id>"

  def get_progress_user(user_id)
    data = $redis.get(format(STEPS_LESSON_PROGRESS, user_id: user_id))
    return [{}] if data.blank?

    JSON.parse(data)
  end
end
