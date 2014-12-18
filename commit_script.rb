require 'json'
require_relative 'committer'

file = File.read('pattern.json')
pattern_hash = JSON.parse(file)
pattern = pattern_hash['pattern']

Committer.actual_commit(Committer.get_dates_to_commit(pattern))
