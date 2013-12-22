require 'sinatra'
require_relative 'committer'

get '/' do
	erb:'index.html'
end

post '/' do
	Committer.actual_commit(Committer.get_dates_to_commit(params[:pattern]))
	'hello'
end