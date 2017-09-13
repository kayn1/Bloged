module Authors
  class AccountsController < AuthorController

    def edit
    end

    def update_author
      current_author.update(author_params)
      respond_to do |format|
        if current_author.update(author_params)
          format.js { flash.now[:notice] = 'Author updated' }
          format.json { render json: current_author, status: :updated}
        else
          format.html { render :edit }
          format.js { flash[:alert] = 'Fail' }
        end
      end
    end

    def update_password
      if current_author.valid_password?(author_password_params[:current_password])
        if current_author.change_password(author_password_params)
          sign_in(current_author, byapass: true)
          flash[:success] = 'password changed'
        else
          flash[:danger] = 'incorrect'
        end
      end
      redirect_to root_url
    end

    private 

      def author_params
        params.require(:author).permit(:name, :email)
      end

      def author_password_params
        params.require(:author).permit(:current_password, :new_password, :new_password_confirmation)
      end
  end
end