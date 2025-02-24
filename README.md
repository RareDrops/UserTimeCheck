# UserTimeCheck
![demo.gif](https://raw.githubusercontent.com/RareDrops/UserTimeCheck/refs/heads/master/.github/images/demo.gif)

**UserTimeCheck** is a simple webpage that shows the current time of the user. It uses [Day.js](https://day.js.org/) to get the time, date, and timezone information. The user can also change the timezone using a modal with a dropdown selection.

## Features

- Automatically detects the user's timezone.
- Displays the current time and date based on the user's timezone.
- Allows the user to change the timezone using a modal with a dropdown selection.
- Uses Day.js for date and time manipulation.
- Uses MicroModal for the modal functionality.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/RareDrops/UserTimeCheck.git
```

2. Navigate to the project directory:

```bash
cd UserTimeCheck
```

3. Install the dependencies:

```bash
npm install
```

## Usage

1. Start the server:

```bash
npm install -g live-server
live-server
```

2. Open your browser and navigate to `http://localhost:8090` or whatever the server is serving at.

## Dependencies

- [Day.js](https://day.js.org/) - A minimalist JavaScript library for date and time manipulation.
- [Express](https://expressjs.com/) - A minimal and flexible Node.js web application framework.
- [MicroModal](https://micromodal.now.sh/) - A lightweight, configurable modal library.

## DevDependencies

- [Webpack](https://webpack.js.org/) - A static module bundler for modern JavaScript applications.
- [Webpack CLI](https://webpack.js.org/api/cli/) - Command line interface for Webpack.

## Scripts
- `live-server`: Runs the server.
- `npm run build`: Builds the project using Webpack.

## License

This project is licensed under the [MIT License](https://github.com/RareDrops/UserTimeCheck/blob/master/LICENSE).

## Author

- [raredrop](https://github.com/RareDrops)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Issues

If you encounter any issues, please open an issue on GitHub: [https://github.com/RareDrops/UserTimeCheck/issues](https://github.com/RareDrops/UserTimeCheck/issues)
