module Api
  module V1
    class LessonsController < ApplicationController

      def index
        lessons = Lesson.all
        render json: LessonSerializer.new(lessons, options).serialized_json
      end

      def show
        lesson = Lesson.find_by(slug: params[:slug])
        render json: LessonSerializer.new(lesson, options).serialized_json
      end

      def create
        lesson = Lesson.new(lesson_params)

        if lesson.save
          render json: LessonSerializer.new(lesson).serialized_json
        else
          render json: { error: lesson.errors.messages }, status: 422
        end
      end

      def update
        lesson = Lesson.find_by(slug: params[:slug])

        if lesson.update(lesson_params)
          render json: LessonSerializer.new(lesson, options).serialized_json
        else
          render json: { error: lesson.errors.messages }, status: 422
        end
      end

      def destroy
        lesson = Lesson.find_by(slug: params[:slug])

        if lesson.destroy
          head :no_content
        else
          render json: { error: lesson.errors.messages }, status: 422
        end
      end

      private

      def lesson_params
        params.require(:lesson).permit(:title, :video_url, :description, :topic, :subject, :grade, :teacher_id)
      end

      def options
        @options ||= { include: %i[reviews comments] }
      end
    end
  end
end