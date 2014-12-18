require 'date'
require 'chronic'

def get_earliest_sunday
	last_year = Date.new(Date.today.year - 1, Date.today.month, Date.today.day)
	sunday = Chronic.parse('next sunday', :now => last_year)
	return sunday
end

def get_latest_saturday
	return Chronic.parse('last saturday')
end