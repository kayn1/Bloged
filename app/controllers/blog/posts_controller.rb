module Blog
	class PostsController < BlogController

  # GET /posts
  # GET /posts.json
  def index
    @posts = Post.all.list_for(params[:page], params[:tag])
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
     @post = Post.published.friendly.find(params[:id])
  end
    
 end
end
