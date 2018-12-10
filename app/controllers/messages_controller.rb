class MessagesController < ApplicationController

  def index
  end

  def create
  	redirect_to group_messages_path(@group), :notice
  end

end
