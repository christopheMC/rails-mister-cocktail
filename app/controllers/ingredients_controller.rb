class IngredientsController < ApplicationController
  def index
    @ingredients = Ingredient.all
  end

  def new
    @ingredient = Ingredient.new
  end

  def create
    @ingredient = Ingredient.new(set_params)
    if @ingredient.save
      redirect_to ingredients_path
    else
      render :new
    end
  end

  private

  def set_params
    params.require(:ingredient).permit(:name)
  end
end
