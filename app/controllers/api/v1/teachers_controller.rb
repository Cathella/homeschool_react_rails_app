module Api
  module V1
    class TeachersController < ApplicationController
      protect_from_forgery with: :null_session
      
      def index
        teachers = Teacher.all
        render json: TeacherSerializer.new(teachers).serialized_json
      end

      def show
        teacher = Teacher.find_by(slug: params[:slug])
        render json: TeacherSerializer.new(teacher).serialized_json
      end

      def create
        teacher = Teacher.new(teacher_params)

        if teacher.save
          render json: TeacherSerializer.new(teacher).serialized_json
        else
          render json: { error: teacher.errors.messages }, status: 422
        end
      end

      def update
        teacher = Teacher.find_by(slug: params[:slug])

        if teacher.update(teacher_params)
          render json: TeacherSerializer.new(teacher).serialized_json
        else
          render json: { error: teacher.errors.messages }, status: 422
        end
      end

      def destroy
        teacher = Teacher.find_by(slug: params[:slug])

        if teacher.destroy
          head :no_content
        else
          render json: { error: teacher.errors.messages }, status: 422
        end
      end

      private

      def teacher_params
        params.require(:teacher).permit(:name)
      end
    end
  end
end