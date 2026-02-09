import requests

with open('checked_urls.txt', 'r') as f:
    urls = [line.strip() for line in f if line.strip()]

print(f"Checking {len(urls)} URLs...")
for url in urls:
    try:
        r = requests.head(url, timeout=5, allow_redirects=True)
        if r.status_code == 200:
            print(f"[OK] {url}")
        else:
            print(f"[FAIL {r.status_code}] {url}")
    except Exception as e:
        print(f"[ERROR] {url} : {e}")
