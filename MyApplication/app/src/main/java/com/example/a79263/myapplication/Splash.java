package com.example.a79263.myapplication;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Handler;
import android.os.Message;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Window;
import android.widget.RelativeLayout;

public class Splash extends AppCompatActivity {
    boolean flag = true;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
//        requestWindowFeature(Window.FEATURE_NO_TITLE);
        setContentView(R.layout.activity_main2);
        RelativeLayout layoutSplash=(RelativeLayout) findViewById(R.id.relative);
        handler.sendEmptyMessageDelayed(1,5000);

    }
    public Handler handler = new Handler(){
        @Override

        public void handleMessage(Message msg){

            switch (msg.what){
                case 1:
                    if(flag){
                        startActivity(new Intent(Splash.this,Guide.class));
                    } else
                        startActivity(new Intent(Splash.this,MainActivity.class));
                    Splash.this.finish();
                    break;
            }
            SharedPreferences guideFlag = getSharedPreferences("guideFlag",0);
            boolean flag = guideFlag.getBoolean("guideFlag",false);
        }
    };
}
