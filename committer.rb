require 'date'
require 'chronic'
	
class Committer
	class << self
		private
		def get_earliest_sunday
			last_year = Date.new(Date.today.year - 1, Date.today.month, Date.today.day)
			sunday = Chronic.parse('next sunday', :now => last_year)
			return Date.parse(sunday.to_s)
		end

		def get_latest_saturday
			return Date.parse(Chronic.parse('last saturday').to_s)
		end

		def dates
			get_earliest_sunday.upto(get_latest_saturday).to_a
		end
	end

	def self.get_dates_to_commit(pattern)
		commit_dates = []
		i = 0
		while i < pattern.length
			if (pattern[i] == "1")
				20.times do |j|
					commit_dates << dates[i].to_time + j * 600
				end
			end
			i += 1
		end
		return commit_dates
	end

	def self.actual_commit(dates)
		dates.each do |date|
			puts "committing! on "
			puts date
			letters = ['a','b','c','d','e','f','g','h']
			f = File.open('dummy', 'w') do |f| 
				f << letters.shuffle.join('')
			end
			`GIT_AUTHOR_DATE="#{date}" GIT_COMMITTER_DATE="#{date}" git commit -am "changed on #{date}"`
		end
	end
end
