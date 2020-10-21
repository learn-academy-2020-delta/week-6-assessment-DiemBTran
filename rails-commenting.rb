# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# 1) BlogPostsController is the controller in which we will define the methods that will be invoked within the routes. BlogPostsController is something we created, which inherits from ApplicationController, which inherits from ActionController. ActionController contains classes and method definitions for handling HTTP requests.
class BlogPostsController < ApplicationController
  def index
    # 2) We are creating an instance variable @posts, which is assigned the entirety of the BlogPost instances with the query selector .all. When method index is invoked in the route, it will display all of the BlogPosts.
    @posts = BlogPost.all
  end

  def show
    # 3) We are creating an instance variable @post, which is assigned a single BlogPost instance with the query selector .find. The argument within .find selects a query with the given URL's parameter. When method show is invoked in the route, it will display the single BlogPost with that parameter :id.
    @post = BlogPost.find(params[:id])
  end

  # 4) The controller method new represents a midway point between Create and Read in CRUD. It is the Rails convention to display a form to the user to input.
  def new
    @post = Post.new
  end

  def create
    # 5) We are creating an instance variable of @post that is assigned a newly created instance BlogPost. This instance should have the strong params listed in the private method below.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # 6) After selecting that query with params[:id] and assigning it to the instance variable @post, the user can update the post with valid strong params.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 7) If an invalid destruction is run, the user will be taken back to the page of the post they were originally seleected for deletion.
      redirect_to blog_post_path(@post)
    end
  end

  # 8) Private is a keyword in Ruby that restricts the scope of where a method can be called. You would define strong paramters here because they will only ever be used locally within the controller.
  private
  def blog_post_params
    # 9) These strong params require a blog_post object that is formatted as a hash. It permits the parameters of title and content, which are pieces of information that can be saved into the database as part of a BlogPost. 
    params.require(:blog_post).permit(:title, :content)
  end

end


# FILE: app/models/blog_post.rb

class BlogPost < ApplicationRecord
  # 10) This is an association between two models that shows that a BlogPost instance can have many Comment instances. 
  has_many :comments
end
