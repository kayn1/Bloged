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
          flash[:error] = 'Fail'
        end
      end
    end

    def update_password
      pass_data = author_password_params
      if current_author.valid_password?(pass_data[:current_password])
        current_password.update(
          password: pass_data[:current_password],
          password_confirmation: pass_data[:current_password_confirmation]
        )
      end
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