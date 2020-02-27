
body {
    background: #2e394d;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
  }
  
  * {
      box-sizing: border-box;
      &:before, &:after {
          content: '';
          position: absolute;
      }
  }
  
  input {
      height: 40px;
      left: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      width: 40px;
  }
  
  .toggle-wrapper {
      flex: 1 1 calc(100% / 3);
      min-height: 50vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
      @media (max-width: 960px) {
          flex: 1 1 calc(100% / 2);
      }
      @media (max-width: 700px) {
          flex: 1 1 100%;
      }
      &:nth-child(1) {
          background: #dec387;
      }
      &:nth-child(2) {
          background: #de8797;
      }
      &:nth-child(3) {
          background: #87aade;
      }
      &:nth-child(4) {
          background: #c5de87;
      }
      &:nth-child(5) {
          background: #87ded2;
      }
      &:nth-child(6) {
          background: #c487de;
      }
      &:nth-child(7) {
          background: #de8787;
          .toggle {
              transform: translate(-40px, 40px);
          }
      }
      &:nth-child(8) {
          background: #decf87;
          .toggle {
              transform: translate(-40px, 40px);
          }
      }
  }
  
  .name {
      width: 80%;
      position: absolute;
      font: 500 14px 'Rubik', sans-serif;
      letter-spacing: .5px;
      text-transform: uppercase;
      text-shadow: 0 1px 1px rgba(0,0,0,0.4);
      bottom: 15px;
      right: 15px;
      text-align: right;
  }
  
  .toggle {
      position: relative;
      display: inline-block;
  }
  
  label.toggle-item {
      width: 7em;
      background: #2e394d;
      height: 3em;
      display: inline-block;
      border-radius: 50px;
      margin: 40px;
      position: relative;
      transition: all .3s ease;
      transform-origin: 20% center;
      cursor: pointer;
      &:before {
          display: block;
          transition: all .2s ease;
          width: 2.3em;
      height: 2.3em;
          top: .25em;
          left: .25em;
      border-radius: 2em;
      border: 2px solid #88cf8f;
          transition: .3s ease;
      }
  }
  
  .normal {
      label {
          background: #af4c4c;
      border: .5px solid rgba(117, 117, 117, 0.31);
      box-shadow: inset 0px 0px 4px 0px rgba(0,0,0,0.2), 0 -3px 4px rgba(0,0,0,0.15);
          &:before {
              border: none;
              width: 2.5em;
              height: 2.5em;
              box-shadow: inset 0.5px -1px 1px rgba(0, 0, 0, 0.35);
              background: #fff;
              transform: rotate(-25deg);
          }
          &:after {
              background: transparent;
              height: calc(100% + 8px);
              border-radius: 30px;
              top: -5px;
              width: calc(100% + 8px);
              left: -4px;
              z-index: 0;
              box-shadow: inset 0px 2px 4px -2px rgba(0,0,0,0.2), 0px 1px 2px 0px rgba(151, 151, 151, 0.2);
          }
      }
  }
  
  #normal:checked + label {
      background: #4caf50;
      &:before {
          left: 67px;
      }
  }
  
  .transparent {
      label {
          background: transparent;
          border: 3px solid #fff;
          height: 3.35em;
          &:before {
              border: 3px solid #fff;
              width: 2em;
              height: 2em;
              top: .3em;
              left: .3em;
              background: #fff;
          }
      }
  }
  
  #transparent:checked + label {
      &:before {
          transform: translateX(59px);
      }
  }
  
  .checkcross {
      label:before {
          content: none;
      }
      .check {
          border-radius: 50%;
      width: 2.5em;
      height: 2.5em;
      position: absolute;
      background: #8BC34A;
      transition: .4s ease;
      top: 4.5px;
      left: 4.5px;
          &:before, &:after {
              height: 4px;
              border-radius: 10px;
              background: #fff;
              transition: .4s ease;
          }
          &:before {
              width: 25px;
              transform: rotate(-45deg) translate(-6px, 20px);
          }
          &:after {
              width: 10px;
              transform: rotate(45deg) translate(20px, 11px);
          }
      }
  }
  
  #checkcross:checked + label {
      .check {
          left: 68px;
          transform: rotate(360deg);
          background: #c34a4a;
          &:before {
              width: 27px;
              transform: rotate(-45deg) translate(-8px, 18px);
      
          }
          &:after {
              width: 27px;
          transform: rotate(45deg) translate(18px, 8px);
          }
      }
  }
  
  #gravity:checked + label {
      transform: rotate(90deg);
      &:before {
          transform: translateX(67px);
          transition-delay: .2s;
          transition: 0.6s cubic-bezier(0.895, 0.03, 0.685, 0.22) .2s; 
      }
  }
  
  .beer-pong {
      label:before {
          background: #f9f9f9;
      box-shadow: inset 0 -3px 0 0 #c6c5c5;
      border: none;
      width: 2.5em;
      height: 2.5em;
      top: .25em;
      left: .25em;
      }
      .cup {
          top: -3%;
          right: -118px;
          border-top: 90px solid #f44336;
          border-left: 15px solid transparent;
          border-right: 15px solid transparent;
          height: 3px;
          position: absolute;
          width: 80px;
      transform-origin: bottom right;
      transition: .2s cubic-bezier(0.42, 0.5, 0.58, 1);
          &:before {
              box-shadow: 0 -10px 0 0px rgba(39, 39, 39, 0.1), 0px -20px 0 0px rgba(39, 39, 39, 0.1);
              border-radius: 3px;
              overflow: hidden;
              background: rgba(39, 39, 39, 0.1);
              width: 120%;
              left: -5px;
              height: 4px;
              top: -40px;
          }
          .lid {
              position: absolute;
              width: 95px;
              height: 8px;
              border-radius: 20px;
              background: #efefef;
              bottom: 86px;
              left: -23px;
              &:after {
                  background: #efefef;
                  width: 48px;
                  height: 5px;
                  left: 50%;
                  margin-left: -24px;
                  top: 94px;
                  border-radius: 0 0 3px 3px;
              }
          }
      }
  }
  
  #beer-pong:checked  {
      ~ .cup {
          animation: .2s linear cup 1s forwards;
      }
      + label:before {
          animation: 2s linear bounce-off forwards;
      }
  }
  
  @keyframes cup {
      0% { transform: none; }
      50% { transform: rotate(75deg) translate(10px,15px); }
      90% { transform: rotate(70deg) translate(10px,15px); }
      100% { transform: rotate(75deg) translate(10px,15px); }
  }
  
  @keyframes bounce-off {
      0% { transform: translateY(0); }
      10%,25% { transform: translate(-20px, -80px); }
      50% { transform: rotate(163deg); transform-origin: 100px -12px; }
      70% { transform: rotate(0) translate(-3px, -8px);  transform-origin: 100px -12px;  }
      75% { transform: translate(20px, -8px);}
      80% { transform:  translate(30px,0px) }
      85% { transform:  translate(40px, -3px) }
      87% { transform:  translate(46px, 0px) }
      90% { transform:  translate(52px, -1px) }
      95% { transform:  translate(60px, 0px) }
      100% { transform:  translate(64px,0px);}
  }
  
  
  .dog-rollover {
      label {
          &:before {
              content: none;
          }
          .dog {
              display: inline-block;
              position: absolute;
              width: 2.5em;
              height: 2.5em;
              top: .25em;
              left: .2em;
              transition: .6s ease;
          }
          .eyes {
              position: absolute;
              width: 8px;
              height: 8px;
              background: #222;
              border-radius: 50%;
              transform: translate(8px, 14px);
              box-shadow: 16px 0 0 #222, 22px -4px 0 12px #e4ac04;
          }
          .ear {
              width: 18px;
              height: 20px;
              position: absolute;
              left: -4px;
              bottom: 80%;
              background: #f9bb00;
              margin-bottom: -5px;
              border-radius: 50% 50% 0 0 / 100% 100% 0 0;
              box-shadow: inset 4px 0 0 0px #ffffff, inset -4px 0 0 0px #ffffff;
              transform: rotate(-40deg);
              &.right {
                  transform: rotate(60deg) scaleX(-1);
                  left: auto;
                  transform-origin: center bottom;
                  transition: .4s ease-in-out;
                  right: 0px;
              }
          }
          .face {
              overflow: hidden;
              border-radius: 50%;
              width: 2.5em;
              height: 2.5em;
              position: absolute;
              background: #fff;
              z-index: 8;
          }
          .mouth {
              position: absolute;
              background: #222;
              width: 14px;
              height: 7px;
              left: 50%;
              margin-left: -7px;
              bottom: 12px;
              border-radius: 2px 2px 20px 20px;
              bottom: 8px;
              transform: scale(0);
              transition: .1s ease;
              &:before {
                  width: 8px;
                  height: 8px;
                  background: #ec788d;
                  border-radius: 0 0 50% 50%;
                  transform: translate(3px, 5px);
              }
          }
          &:before {
              border-color: white;
              background: white;
          }
      }
  }
  
  #doggo:checked  {
      ~ .cup {
          animation: .2s linear cup 1s forwards;
      }
      + label {
          .dog {
              left: 68px;
              transform: rotate(360deg);
          }
          .mouth {
              transform: scale(1);
              transition-delay: .7s;
          }
          .ear.right {
              transform: scaleX(-1) rotate(-35deg);
              transition-delay: .6s;
          }
      }
  }
  
  
  .basketball-hoop {
      label {
          background: #fdb827;
      }
      label:before {
          content: none;
      }
      .ball {
      border-radius: 50%;
      width: 2.5em;
      height: 2.5em;
      position: absolute;
      background: #FF9800;
      border: 2px solid black;
      transition: .4s ease;
      top: 4px;
      left: 4px;
      background-image: radial-gradient(circle at -5px 10px, transparent 15px, black 15px, black 17px, transparent 17px), radial-gradient(circle at 41px 25px, transparent 15px, black 15px, black 17px, transparent 17px), linear-gradient(110deg, transparent 22px, black 22px, black 24px, transparent 24px), linear-gradient(18deg, transparent 22px, black 22px, black 24px, transparent 24px);
          &__wrapper {
              transition: .4s ease;
              width: 195%;
              height: 200%;
              transform-origin: 50% -2%;
          }
      }
      .hoop {
          top: -50px;
      right: -84px;
      width: 50px;
      background: #f44336;
      height: 8px;
      position: absolute;
          &:before {
              position: absolute;
              right: -4px;
              width: 7px;
              height: 60px;
              background: #cd2e22;
              top: -40px;
          }
          &:after {
              width: 40px;
              height: 35px;
              background: repeating-linear-gradient(45deg, transparent, transparent 13px, white 13px, white 15px), repeating-linear-gradient(-45deg, transparent, transparent 13px, white 13px, white 15px);
              top: 8px;
              border-radius: 0 0 20% 20%/40% 40% 60% 60%;
              border: 2px solid #fff;
              border-width: 0 2px;
              left: 2px;
              z-index: 20;
          }
      }
  }
      
  #hoop:checked  {
      + label {
          background: #542583;
          transition-delay: 1.35s;
          .ball__wrapper {
              animation: 1.5s linear ball-wrapper forwards;
          }
          .ball {
              animation: 1.5s linear ball forwards;
          }
      } 
  }
  
  @keyframes ball {
      0% { transform: none; }
      40% { transform: rotate(-150deg) }
      48% { transform: rotate(-150deg) translateY(92px) }
      52% { transform: rotate(-150deg) translate(-10px, 80px) }
      56% { transform: rotate(-150deg) translate(-25px, 91px) }
      60% { transform: rotate(-150deg) translate(-35px, 86px) }
      65% { transform: rotate(-150deg) translate(-45px, 91px) }
      70% { transform: rotate(-150deg) translate(-50px, 87px) }
      75% { transform: rotate(-150deg) translate(-60px, 91px) }
      80% { transform: rotate(-150deg) translate(-65px, 88px) }
      85% { transform: rotate(-150deg) translate(-70px, 91px) }
      90% { transform: rotate(-150deg) translate(-75px, 90px) }
      95% { transform: rotate(-150deg) translate(-80px, 90px) }
      100% { transform: rotate(-150deg) translate(-82px,91px) }
  }
  
  @keyframes ball-wrapper {
      0% { transform: none; }
      40%, 100% { transform: rotate(150deg); }
  }
  
  .pancake-stack {
      label:before {
          content: none;
      }
      .pancakes {
          transition: .6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      .pancake {
          background: #e27c31;
          border-radius: 50%;
      width: 2.5em;
      height: 2.5em;
      position: absolute;
          transition: .4s ease;
          top: 2px;
          left: 4px;
          box-shadow: 0 2px 0 2px #fbbe7c;
          &:nth-child(2) {
              left: 0;
              top: -3px;
              transform: scale(0);
              transition: .2s ease .2s;
          }
          &:nth-child(3) {
              top: -8px;
              transform: scale(0);
              transition: .2s ease .2s;
              &:before, &:after {
                  background: #ef8927;
                  border-radius: 20px;
                  width: 50%;
                  height: 20%;
              }
              &:before {
                  top: 20px;
                  left: 5px;
              }
              &:after {
                  top: 22px;
                  right: 5px;
              }
          }
      }
      .butter {
          width: 12px;
      height: 11px;
      background: #fbdb60;
      top: 6px;
      left: 20px;
      position: absolute;
      border-radius: 4px;
      box-shadow: 0 1px 0 1px #d67823;
          transform: scale(0);
          transition: .2s ease;
      }
  }
  
  #pancake:checked  {
      + label {
          .pancakes {
              transform: translateX(70px);
          }
          .pancake {
              &:nth-child(2) {
                  transform: scale(1);
                  transition-delay: .2s;
              }
              &:nth-child(3) {
                  transform: scale(1);
                  transition-delay: .4s;
              }
          }
          .butter {
              transform: scale(1);
              transition-delay: .6s;
          }
      } 
  }
  
  .footer {
      flex-wrap: wrap;
      padding: 5rem 5rem 3rem;
      text-align: center;
      min-height: 20vh;
      display: flex;
      font: 14px/1.7 'Rubik';
      color: #fff;
      align-items: center;
      justify-content: center;
      a {
          text-decoration: none;
          color: #fff;
          padding: 3px 0;
          border-bottom: 1px dashed;
          &:hover {
              border-bottom: 1px solid;
          }
      }
  }
  
  footer {
      margin-top: 1.5rem;
      a {
          text-decoration: none;
          display: inline-block;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: transparent;
          border: 1px dashed #fff;
          color: #fff;
          margin: 5px;
          &:hover {
              background: rgba(255, 255, 255, 0.1);
          }
          .icons {
              margin-top: 8px;
              display: inline-block;
              font-size: 20px;
              &:before {
                  position: relative;
              }
          }
      }
  }