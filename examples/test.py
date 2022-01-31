import requests
import random

RANDOM_YEAR = random.randint(200, 1000)
API_URL = "https://leap-year.ultirequiem.repl.co"

data = requests.get(f"{API_URL}/{RANDOM_YEAR}").json()

print(f"Is {RANDOM_YEAR} a leap year? {data['leapYear']}.")
