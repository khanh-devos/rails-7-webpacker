class Api::V1::MessagesController < ApplicationController

  def index
    @message = Message.all.sample
    render json: {
        success: true,
        data: {
            message: @message.text
        }
    }
  end

end