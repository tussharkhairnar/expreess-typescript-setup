<h2>TYPESCRIPT CONFIGURATION FOR EXPRESS</h2>

#### **create basic node js project** ####

```npm init -y```


#### **install express ** ####

```npm i express```

#### **install devDependencies** ####

```npm i -D express typescript ts-node nodemon @types/node @types/express```


#### **set command line parameters** ####
<pre>
<code>
 "scripts": {
    "start":"node dist/app.js",     /*command:  npm start         */
    "dev" : "nodemon src/app.ts",   /*command:  npm run dev       * /
    "build":"tsc -p .",             /*command:  npm run build    */
    "test": "echo \"Error: no test specified\" && exit 1"
  },
</code>
</pre>



#### **type following command in terninal and enter** ####
<pre>
<code>
  npm run dev
</code>
</pre>

<h1>Done!<h1>


