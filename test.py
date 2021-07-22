import requests

data = requests.get("https://leap-year.ultirequiem.repl.co/2024").json()

print(data)
