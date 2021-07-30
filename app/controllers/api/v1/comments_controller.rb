module Api
  module V1
    class CommentsController < ApplicationController

      def create
        comment = Comment.new(comment_params)

        if comment.save
          render json: CommentSerializer.new(comment).serialized_json
        else
          render json: { error: comment.errors.messages }, status: 422
        end
      end

      def destroy
        comment = Comment.find(params[id])

        if comment.destroy
          head :no_content
        else
          render json: { error: comment.errors.messages }, status: 422
        end
      end

      private

      def comment_params
        params.require(:comment).permit(:body, :author, :lesson_id)
      end
    end
  end
end