# The Vagus Advantage

Welcome to the repository for **The Vagus Advantage**, a comprehensive guide to understanding and leveraging vagus nerve stimulation for improved mental and physical wellbeing. This repository contains the source files for the book, written in Quarto, along with supplementary resources.

View an online version of the book at [https://personalscience.github.io/book-vns/](https://personalscience.github.io/book-vns/).

## About the Book

"The Vagus Advantage" bridges cutting-edge neuroscience and everyday wellness, offering insights into the remarkable potential of vagus nerve stimulation. It is designed for:

- **Healthcare professionals** seeking additional tools for patient care.
- **Researchers** exploring the intersection of neuroscience and wellness technology.
- **Individuals** looking to take an active role in managing their mental and physical wellbeing.

## Repository Structure

- **Quarto Files**: The main content of the book is written in `.qmd` files, located in the root directory.
- **Resources**: Supplementary files such as images, bibliographies, and stylesheets are located in the `_resources/` folder.
- **Generated Files**: The `docs/` folder contains the rendered HTML outputs of the book.

## How to Build the Book

To build the book locally, you will need [Quarto](https://quarto.org/) installed on your system. Once installed, run the following command in the root directory:

```bash
quarto render
```

This will generate the HTML version of the book in the `docs/` folder.

## 🛠️ Project Setup

This book uses shared resources (e.g., images, bibliography files) located in the `_resources/` directory at the project root. To make these accessible from the `en/` and `zh/` subdirectories, we use symbolic links.

### ✅ macOS / Linux

No special setup is required. The symlink is tracked in Git and should work automatically after cloning.

### 🪟 Windows (10 or 11)

1. **Enable Developer Mode** *(only required if you plan to create symlinks)*:
    - Go to **Settings → Privacy & Security → For Developers**
    - Turn on **Developer Mode**

2. **Ensure Git preserves symlinks** when cloning:

    ```bash
    git clone -c core.symlinks=true https://github.com/your/repo.git
    ```

    Or configure globally:

    ```bash
    git config --global core.symlinks true
    ```

3. **Verify the symlink** after cloning:

    ```bash
    ls -l en/_resources
    ```

    You should see:

    ```
    _resources -> ../_resources
    ```

    If the symlink appears as a regular file or folder, Quarto builds will fail. In that case, delete and recreate it:

    ```bash
    cd en
    rm -rf _resources
    ln -s ../_resources _resources
    ```

> ⚠️ Without proper symlink support, image paths, bibliographies, and other shared files may not resolve during `quarto render`.

## Contributing

We welcome contributions to improve the book. If you have suggestions, corrections, or additional content, feel free to open an issue or submit a pull request.

## License

This project is copyright 2025 by Richard Sprague and Dr. Ray Zhang.

May 2025


