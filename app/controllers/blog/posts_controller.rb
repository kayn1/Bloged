module Blog
	class PostsController < BlogController

  # GET /posts
  # GET /posts.json
  def index
    if params[:tag].present?
      @posts = Post.most_recent.published.tagged_with(params[:tag]).paginate(:page => params[:page], per_page: 3).order('created_at DESC')
    else
      @posts = Post.published.paginate(:page => params[:page], per_page: 3).order('created_at DESC')
    end
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
     @post = Post.friendly.find(params[:id])
  end
    
 end
end
