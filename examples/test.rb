require 'net/http'
require 'json'
require 'uri'

random_year = rand(200..1000)
uri = URI.parse("https://leap.deno.dev/#{random_year}")

response = Net::HTTP.get_response uri
data = JSON.parse(response.body)

puts "Is #{random_year} a leap year? #{data['result']}."
