class Api::TodosController < ApplicationController
  def create
    new_todo = Todo.create!(todo_params)
    render json: new_todo
  end

  def update
    todo = Todo.update!(todo_params)
    render json: todo
  end

  def destroy
    todo = Todo.find(params[:id])
    todo.destroy!
    render json: todo
  end

  def index
    render json: Todo.all
  end

  def show
    render json: Todo.find(params[:id])
  end

  private
  def todo_params
    params.permit(:todo).require(:id, :title, :body, :done)
  end
end
