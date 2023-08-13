def create_users
  users_data = [
    { email: "locked@mail.ru", password: "test123T", password_confirmation: "test123T" },
    { email: "normal@mail.ru", password: "test123T", password_confirmation: "test123T" },
  ]
  @users = User.create(users_data)
end

def create_lessons
  lessons_data = [
    { title: "title", description: "description", priority_index: 1, access_users: "#{User.first.id}" },
    { title: "title_title", description: "description_description", priority_index: 2, access_users: "#{User.first.id}" },
    { title: "title_title", description: "description_description", priority_index: 3, access_users: "" },
    { title: "title_title", description: "description_description", priority_index: 4, access_users: "" }
  ]
  @lessons = Lesson.create(lessons_data)
end

def create_step_lessons
  path_roote = Rails.root.join("./storage/step_images/lesson_1/")
  step_lessons = [
    { title: "title", answer: "description", question: "question", priority_index: 1, lesson_id: Lesson.find_by(priority_index: 1).id },
    { title: "title", answer: "description", question: "question", priority_index: 2, lesson_id: Lesson.find_by(priority_index: 1).id },
    { title: "title", answer: "description", question: "question", priority_index: 3, lesson_id: Lesson.find_by(priority_index: 1).id },
    { title: "title", answer: "description", question: "question", priority_index: 1, type_question: "video", lesson_id: Lesson.find_by(priority_index: 2).id },
    { title: "title", answer: "description", question: "question", priority_index: 2, type_question: "video", lesson_id: Lesson.find_by(priority_index: 2).id },
    { title: "title", answer: "description", question: "question", priority_index: 3, type_question: "video", lesson_id: Lesson.find_by(priority_index: 2).id }
  ]
  @step_lessons = StepLesson.create(step_lessons)
  (1..3).each do |step|
    step_lesson = StepLesson.find_by(priority_index: step, lesson_id: Lesson.find_by(priority_index: 1).id) 
    path_file = path_roote + "priority_index_#{step}.png"
    step_lesson.image.attach(
      io: File.open(path_file),
      filename: File.basename(path_file)
    )
  end
end


create_users
create_lessons
create_step_lessons

