<script></script>

<div class="container">
  <div class="gradient" />
  <span>Fetching from Amazon.com</span>
</div>

<style>
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--brand-light-gray);
    color: var(--brand-gray);
    border: 1px solid var(--brand-gray);
    margin: 0.7rem;
    padding-left: 12px;
    height: 50px;
    overflow: hidden;
  }
  .gradient {
    left: -10px;
    position: absolute;
    height: 50px;
    width: 250px;
    background: linear-gradient(
      90deg,
      rgba(245, 244, 244, 1) 0%,
      rgba(196, 196, 196, 0.7) 50%,
      rgba(245, 244, 244, 1) 100%
    );

    animation: linear infinite;
    animation-name: move;
    animation-duration: 1.2s;
    opacity: 0.5;
  }
  @keyframes move {
    0% {
      left: -250px;
    }

    50% {
      left: 100%;
    }
    100% {
      left: 100%;
    }
  }
</style>
