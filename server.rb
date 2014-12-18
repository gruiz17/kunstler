require 'sinatra'

get '/' do
	erb:'index.html'
end

post '/' do
	puts params[:pattern]
	'hello'
end