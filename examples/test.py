import requests
import random

RANDOM_YEAR, API_URL = random.randint(200, 1000), "https://leap.deno.dev"

data = requests.get(f"{API_URL}/{RANDOM_YEAR}").json()

print(f"Is {RANDOM_YEAR} a leap year? {data['result']}.")
