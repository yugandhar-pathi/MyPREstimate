//package org.apache.cordova.FileCopyPlugin;

    import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

    import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.res.AssetManager;
import android.util.Log;

     
    
    /**
     * This class echoes a string called from JavaScript.
     */
    public class FileCopyPlugin extends CordovaPlugin {

        @Override
        public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
            if (action.equals("echo")) {
            	this.CopyAssets();
                String message = args.getString(0);
                this.echo(message, callbackContext);
                return true;
            }
            return false;
        }

        private void echo(String message, CallbackContext callbackContext) {
            if (message != null && message.length() > 0) {
                callbackContext.success(message);
            } else {
                callbackContext.error("Expected one non-empty string argument.");
            }
        }
        //
        private void CopyAssets() {
            AssetManager assetManager = this.cordova.getActivity().getAssets();
            InputStream in = null;
            OutputStream out = null;
            try {
                in = assetManager.open("Databases.db"); 
                out = new FileOutputStream("data/data/com.pr.estimate/app_database/databases/Databases.db");
                this.copyFile(in, out);
                in.close();
                in = null;
                out.flush();
                out.close();
                out = null;
            } catch (Exception e) {
                Log.e("tag", e.getMessage());
            }
            
            try {
                in = assetManager.open("1"); 
                out = new FileOutputStream("data/data/com.pr.estimate/app_database/databases/file__0/1");
                this.copyFile(in, out);
                in.close();
                in = null;
                out.flush();
                out.close();
                out = null;
            } catch (Exception e) {
                Log.e("tag", e.getMessage());
            }
        }

        private void copyFile(InputStream in, OutputStream out) throws IOException {
            byte[] buffer = new byte[1024];
            int read;
            while ((read = in.read(buffer)) != -1) {
                out.write(buffer, 0, read);
            }
        }
        
        
        
        
    }