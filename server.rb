require 'sinatra'
require 'json'

get '/' do
	erb:'index.html'
end

post '/' do
	param_hash = {:pattern => params[:pattern]}
	File.open('pattern.json', 'w') do |f|
		f.write(param_hash.to_json)
	end
	'hello'
end

post '/terminate' do
  logger.info "Received terminate request!"
  Thread.new { sleep 1; Process.kill 'INT', Process.pid }
  halt 200
end