import http.server
import socketserver
import webbrowser
import os
import threading
import sys
import time

# Use a very specific port 1337 for Tycoon 3 to avoid all cache/ghost server issues
PORT = 1337
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Disable browser cache for locally served items to prevent refresh-fatigue
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def start_server():
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
        print(f"\n[SERVER LIVE] Algerian Fast-Food Tycoon 3")
        print(f"[LOCATION]    http://localhost:{PORT}")
        httpd.serve_forever()

if __name__ == "__main__":
    os.chdir(DIRECTORY)
    server_thread = threading.Thread(target=start_server, daemon=True)
    server_thread.start()
    time.sleep(0.5)
    print("Opening game...")
    webbrowser.open(f"http://localhost:{PORT}")
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        sys.exit(0)
