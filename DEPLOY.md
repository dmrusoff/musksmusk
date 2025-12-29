# Deploying MusksMusk

## Part 1: Push to GitHub

Since I cannot access your personal GitHub account, you'll need to create the repository and push the code:

1.  **Log in to GitHub**: Go to [github.com](https://github.com) and sign in.
2.  **Create a New Repository**:
    *   Click the **+** icon in the top right -> **New repository**.
    *   Repository name: `musksmusk` (or whatever you prefer).
    *   Public/Private: Your choice.
    *   **Do not** initialize with README, .gitignore, or License (we already have them).
    *   Click **Create repository**.
3.  **Push your code**:
    Copy the commands under "**…or push an existing repository from the command line**". They will look like this (run these in your VS Code terminal):

    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/musksmusk.git
    git branch -M main
    git push -u origin main
    ```

---

## Part 2: Deploy to AWS Amplify

AWS Amplify is the easiest way to host Next.js applications on AWS.

1.  **Log in to AWS Console**: Go to [aws.amazon.com](https://aws.amazon.com) and sign in.
2.  **Go to AWS Amplify**: Search for "Amplify" in the search bar and select it.
3.  **Create New App**:
    *   Click **"Create new app"**.
    *   Select **"GitHub"** as the source and click Next.
    *   **Authorize AWS**: You may need to grant AWS permission to access your GitHub repositories.
4.  **Configure Build**:
    *   Select the `musksmusk` repository you just created.
    *   Select the `main` branch.
    *   Amplify will automatically detect that this is a **Next.js** app. The default build settings are usually correct.
    *   Click **Next**.
5.  **Review and Deploy**:
    *   Click **"Save and deploy"**.

Amplify will now build your site and deploy it to a live URL (e.g., `https://main.d12345.amplifyapp.com`).

## Part 3: Connect Your Domain

1.  In the AWS Amplify console for your new app, go to **"Domain management"** in the sidebar.
2.  Click **"Add domain"**.
3.  Enter `musksmusk.com`.
4.  aws will give you DNS records (CNAME/A records) that you normally need to add to your domain registrar.
    *   *Note*: Since you said you "own" it, check where you bought it (GoDaddy, Namecheap, Route53, etc.) and add the records there.
