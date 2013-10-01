class PostsController < ApplicationController
  def index
    @posts = Post.all

    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @posts }
    end
  end

  def create
    @post = Post.new(params[:post])

    if @post.save
      render json: @post
    else
      render json: @post
    end
  end

  def destroy
    @post = Post.find(params[:id])

    if @post.destroy
      render json: @post
    else
      render json: @post
    end
  end

  def show
    @post = Post.find(params[:id])
    if @post
      render json: @post
    else
      render json: @post
    end
  end

end
