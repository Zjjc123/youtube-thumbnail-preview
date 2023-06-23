import json
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

from bs4 import BeautifulSoup

# Configure Chrome WebDriver options
chrome_options = Options()
# Run Chrome in headless mode (without opening a browser window)
chrome_options.add_argument("--headless")
driver = webdriver.Chrome(options=chrome_options)

# Load the YouTube front page
driver.get("https://www.youtube.com")

# Execute JavaScript to load the dynamically generated content
time.sleep(5)
driver.find_element(By.TAG_NAME, 'body').send_keys(Keys.END)
time.sleep(2)
driver.find_element(By.TAG_NAME, 'body').send_keys(Keys.END)
time.sleep(5)

# Get the page source after JavaScript execution
page_source = driver.page_source

# Parse the HTML content using BeautifulSoup
soup = BeautifulSoup(page_source, "html.parser")

# Find all video elements on the front page
videos = soup.find_all("ytd-rich-grid-media",
                       class_="style-scope ytd-rich-item-renderer")


extracted_videos = []

# Extract video information
for video in videos:
    video_element = video.find(
        "a", class_="ytd-thumbnail")

    video_url = "https://www.youtube.com" + video_element.get("href")

    title = video.find("yt-formatted-string", id="video-title").text.strip()

    duration_element = video.find(
        "span", class_="style-scope ytd-thumbnail-overlay-time-status-renderer")

    if (duration_element == None or duration_element.text == None):
        continue

    duration = duration_element.text.strip()

    thumbnail_element = video.find(
        "a", id="thumbnail")

    thumbnail_img_element = thumbnail_element.find(
        "img")

    if (thumbnail_img_element == None or thumbnail_img_element.get("src") == None):
        continue

    thumbnail_cover = thumbnail_img_element.get("src")

    channel_name_element = video.find(
        "a", class_="yt-simple-endpoint style-scope yt-formatted-string")

    channel_name = channel_name_element.text.strip()

    channel_icon_element = video.find(
        "img", id="img")

    if (channel_icon_element == None or channel_icon_element.get("src") == None):
        continue

    channel_icon = channel_icon_element.get("src")

    meta_elements = video.find_all(
        "span", class_="inline-metadata-item style-scope ytd-video-meta-block")

    views = meta_elements[0].text.strip()
    date = meta_elements[1].text.strip()

    # Print the video information
    print("Thumbnail Cover:", thumbnail_cover)
    print("Title:", title)
    print("Views:", views)
    print("Date:", date)
    print("Channel Name", channel_name)
    print("Channel Icon:", channel_icon)
    print("Duration:", duration)
    print("------------------------")

    # Store the video information to a list
    extracted_videos.append({
        "title": title,
        "url": video_url,
        "thumbnail_cover": thumbnail_cover,
        "channel_name": channel_name,
        "channel_icon": channel_icon,
        "views": views,
        "date": date,
        "duration": duration
    })

# export as json
with open('./src/data/data.json', 'w') as outfile:
    json.dump(extracted_videos, outfile)

# Quit the WebDriver
driver.quit()
