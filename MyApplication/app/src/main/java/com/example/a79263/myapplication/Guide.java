package com.example.a79263.myapplication;

import android.content.Intent;
import android.content.SharedPreferences;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class Guide extends AppCompatActivity implements View.OnClickListener{
    Button goMain = null;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_guide);
        goMain = (Button)findViewById(R.id.goMain);
        goMain.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()){
            case R.id.goMain:
                startActivity(new Intent(Guide.this,MainActivity.class));
                Guide.this.finish();
        }
    }
}
