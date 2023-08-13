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

  def save_progress_user(user, lesson, priority_index, is_finish: false)
    before_data = get_progress_user(user.id)
    if before_data.blank?
      hash_data = [{ lesson_id: lesson.id, last_step: priority_index, is_finish: is_finish }]
      $redis.set(format(STEPS_LESSON_PROGRESS, user_id: user.id), hash_data.to_json)
    else
      hash_data = { lesson_id: lesson.id, last_step: priority_index, is_finish: is_finish }
      before_data << hash_data
      $redis.set(format(STEPS_LESSON_PROGRESS, user_id: user.id), before_data.to_json)
    end
  end
end
